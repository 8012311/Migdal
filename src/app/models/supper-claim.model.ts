import { Claim } from "./claim.model";
import { CodeValue } from "./code-value.model";

export class SuperClaim {
    inquiryProcessFlag: boolean;
    irregularSuperClaimFlag: boolean;
    pensionFollowUpForInsuredType: number;
    superClaimStatus: CodeValue;
    deathAfterDisabilityFlag: boolean;
    operativeClaims: Array<Claim>
}
