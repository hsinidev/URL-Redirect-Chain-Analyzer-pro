
export interface RedirectStep {
  url: string;
  statusCode: number;
  statusText: string;
  location?: string;
  latency: number; // Time taken for this specific hop
}

export interface RedirectResult {
  id: string;
  timestamp: number;
  inputUrl: string;
  userAgent: string;
  steps: RedirectStep[];
  finalUrl: string;
  finalStatusCode: number;
  error?: string;
  totalTime: number;
}

export type UserAgentType = 'Googlebot Smartphone' | 'Googlebot Desktop' | 'Chrome Desktop' | 'iPhone Safari';
