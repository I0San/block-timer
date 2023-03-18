interface Props {
    blocks: number;
    network: string;
}
export interface TimeObject {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
declare function useBlockCountdown({ blocks, network }: Props): TimeObject;
export default useBlockCountdown;
