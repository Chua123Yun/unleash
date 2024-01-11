/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestScheduleSchemaOneOf } from './changeRequestScheduleSchemaOneOf';
import type { ChangeRequestScheduleSchemaOneOfThree } from './changeRequestScheduleSchemaOneOfThree';
import type { ChangeRequestScheduleSchemaOneOfFive } from './changeRequestScheduleSchemaOneOfFive';

/**
 * A schedule for a change request's application. The schedule can either be pending, failed, or suspended. The schedule will always contain the state of the schedule and the last scheduled time, but other data varies between the different states.
 */
export type ChangeRequestScheduleSchema =
    | ChangeRequestScheduleSchemaOneOf
    | ChangeRequestScheduleSchemaOneOfThree
    | ChangeRequestScheduleSchemaOneOfFive;
