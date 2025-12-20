import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <Section>
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-500 dark:text-ink-300">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink-900 dark:text-white">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">
          The page you are looking for does not exist.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="/">Return home</Button>
        </div>
      </Container>
    </Section>
  );
}
