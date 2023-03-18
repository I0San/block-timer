interface Props {
    blocks: number;
}
export interface TimeObject {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
declare function useBlockCountdownTimer({ blocks }: Props): TimeObject;
export default useBlockCountdownTimer;
