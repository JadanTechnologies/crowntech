
export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  emailOrPhone: string;
  message: string;
}
