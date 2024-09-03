/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { InactiveUserSchema } from './inactiveUserSchema';

/**
 * A list of users that has been flagged as inactive
 */
export interface InactiveUsersSchema {
    /** The list of users that are flagged as inactive */
    inactiveUsers: InactiveUserSchema[];
    /**
     * The version of this schema. Used to keep track of compatibility
     * @minimum 1
     */
    version: number;
}
