import { Skeleton } from "@/components/ui/skeleton";

const HeroSkeleton = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] bg-muted">
      <Skeleton className="absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container-custom text-center">
          <Skeleton className="h-8 w-32 mx-auto mb-6 rounded-full" />
          <Skeleton className="h-12 w-3/4 md:w-1/2 mx-auto mb-4" />
          <Skeleton className="h-6 w-2/3 md:w-1/3 mx-auto mb-8" />
          <div className="flex gap-4 justify-center">
            <Skeleton className="h-12 w-32 rounded-lg" />
            <Skeleton className="h-12 w-32 rounded-lg" />
          </div>
        </div>
      </div>
      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="w-3 h-3 rounded-full" />
        ))}
      </div>
    </div>
  );
};

export default HeroSkeleton;
