export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(values: ContactFormValues) {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  } else if (values.name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (values.name.length > 80) {
    errors.name = "Name must be under 80 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Subject is required.";
  } else if (values.subject.length < 3) {
    errors.subject = "Subject must be at least 3 characters.";
  } else if (values.subject.length > 120) {
    errors.subject = "Subject must be under 120 characters.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (values.message.length > 1000) {
    errors.message = "Message must be under 1000 characters.";
  }

  if (values.company && values.company.length > 0) {
    errors.company = "Spam detected.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
