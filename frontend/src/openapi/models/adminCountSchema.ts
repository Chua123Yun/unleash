/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Contains total admin counts for an Unleash instance.
 */
export interface AdminCountSchema {
    /** Total number of admins that do not have a password set. May be SSO, but may also be users that did not set a password yet. */
    noPassword: number;
    /** Total number of admins that have a password set. */
    password: number;
    /** Total number of service accounts that have the admin root role. */
    service: number;
}
