import { Container } from '@/components/foundation/Container';

export default function RootLoading() {
  return (
    <Container size="default" className="py-20 flex flex-col gap-6 animate-pulse">
      <div className="h-12 w-2/3 bg-slate-200 rounded-md" />
      <div className="h-6 w-1/2 bg-slate-100 rounded-md" />
      <div className="h-40 w-full bg-slate-100 rounded-lg" />
    </Container>
  );
}
