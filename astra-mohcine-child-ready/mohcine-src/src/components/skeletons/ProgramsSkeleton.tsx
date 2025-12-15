import { Skeleton } from "@/components/ui/skeleton";

const ProgramCardSkeleton = () => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-card">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-6">
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-4" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
    </div>
  );
};

const ProgramsSkeleton = () => {
  return (
    <div className="py-12 md:py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-10">
          <Skeleton className="h-8 w-48 mx-auto mb-4" />
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProgramCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsSkeleton;
