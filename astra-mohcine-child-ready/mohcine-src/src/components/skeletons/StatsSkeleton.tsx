import { Skeleton } from "@/components/ui/skeleton";

const StatsSkeleton = () => {
  return (
    <div className="py-12 md:py-16 bg-primary">
      <div className="container-custom">
        <div className="text-center mb-10">
          <Skeleton className="h-8 w-64 mx-auto mb-4 bg-primary-foreground/20" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center">
              <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4 bg-primary-foreground/20" />
              <Skeleton className="h-10 w-20 mx-auto mb-2 bg-primary-foreground/20" />
              <Skeleton className="h-4 w-24 mx-auto bg-primary-foreground/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSkeleton;
