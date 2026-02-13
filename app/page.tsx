import GridComponent from '@/components/Grid';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-slate-800 tracking-tight">
          The Recursive Grid
        </h1>
        <GridComponent />
      </div>
    </div>
  );
}
