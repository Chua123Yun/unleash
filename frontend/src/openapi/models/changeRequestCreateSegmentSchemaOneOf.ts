/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestCreateSegmentSchemaOneOfAction } from './changeRequestCreateSegmentSchemaOneOfAction';
import type { UpsertSegmentSchema } from './upsertSegmentSchema';

export type ChangeRequestCreateSegmentSchemaOneOf = {
    /** The name of this action. */
    action: ChangeRequestCreateSegmentSchemaOneOfAction;
    payload: UpsertSegmentSchema;
};
