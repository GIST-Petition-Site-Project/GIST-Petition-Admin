interface Toast {
  id?: string;
  message: string;
  type: 'success' | 'warning';
  duration?: number;
}
