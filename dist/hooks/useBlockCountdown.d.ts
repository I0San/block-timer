export interface TimeObject {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
/**
 * Usage
 * const { days, hours, minutes, seconds } = useBlockCountdown(100, "bitcoin")
 *
 * @param blocks
 * @param network
 * @returns { days, hours, minutes, seconds }: TimeObject
 */
declare function useBlockCountdown(blocks: number, network: string): TimeObject;
export default useBlockCountdown;
