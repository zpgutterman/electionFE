export class FTEPoll {
  constructor(
    public poll_id: number,
    public pollster: string,
    public sample_size: number,
    public fte_grade: string,
    public start_date: string,
    public end_date: string,
    public created_at: string,
    public url: string,
    public party: string,
    public answer: string,
    public candidate_name: string,
    public pct: number


  ) { }


}
