import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Claim, Progress } from '../models';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input() processModel: Progress;
    @Output() refresh = new EventEmitter();

    canceledClaimStatus = 2;

    ngOnInit() {
    }

    claimRemarks() {
        var text = "";
        if (this.processModel.superClaim && this.processModel.superClaim.inquiryProcessFlag) {
            text += "בירור";
            if (this.processModel.superClaim.pensionFollowUpForInsuredType) {
                text += ", ";
            }
        }
        return text;
    }

    getClaims(): string {
        if (!this.processModel.superClaim || !this.processModel.superClaim.operativeClaims) { return ''; }
        var ParticipatingClaims = this.getParticipatingClaims(this.processModel.superClaim.operativeClaims)
        return ParticipatingClaims ? ParticipatingClaims.map(function (claim) {
            return claim.company + "-" + claim.operativeClaimNum;
        }).join(",") : "אין תביעות משתתפות";
    }

    hasIrragularMark(): boolean {
        return this.processModel && this.processModel.superClaim && this.processModel.superClaim.irregularSuperClaimFlag === true;
    }

    executeRefresh() {
        this.refresh.emit();
    }

    private isParticipatingClaim(claim: Claim): boolean {
        return claim.coverages.find(coverage => coverage.claimParticipating) !== undefined;
    }

    private getParticipatingClaims(operativeClaims: Array<Claim>) {
        return operativeClaims.filter(claim => {
            return claim.claimStatus.code !== this.canceledClaimStatus && this.isParticipatingClaim(claim);
        })
    }
}
