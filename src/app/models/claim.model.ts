import { CodeValue } from "./code-value.model";
import { Coverage } from "./coverage.model";

export class Claim {
    operativeClaimNum: number;
    company: number;
    claimStatus: CodeValue;
    coverages: Array<Coverage>;
}
