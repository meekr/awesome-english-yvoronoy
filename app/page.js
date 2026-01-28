import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";

export default function HomePage() {
  return (
    <div>
      <PageHeader
        title="KHEA English Practice"
        description="Welcome to the KHEA app scaffold. This home page will evolve with curated practice flows and study guidance."
      />
      <Section title="Getting started">
        <Card>
          <p>
            This is a placeholder shell for the upcoming learning experience. Content
            and feature logic will be added in future iterations.
          </p>
        </Card>
      </Section>
    </div>
  );
}
