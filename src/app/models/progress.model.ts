import { Insured } from "./insured.model";
import { ProgressType } from "./progress-type.enum"
import { SuperClaim } from "./supper-claim.model";

export class Progress {
    processType: ProgressType;
    processStatus: number;
    superClaim: SuperClaim;
    insured: Insured;
}
