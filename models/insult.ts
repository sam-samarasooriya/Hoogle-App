

export interface Insult {
    id: number;
    insult: string;
    insultee_id: number;  
    insulter_id: number;  
    created_at: string;   
  }
  
  export interface InsultData {
    insult: string;
    insultee_id: number;
    insulter_id: number;
    created_at?: string;  
  }
  