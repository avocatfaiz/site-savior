import { Skeleton } from "@/components/ui/skeleton";

const PartnersSkeleton = () => {
  return (
    <div className="py-12 md:py-16 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-8">
          <Skeleton className="h-8 w-48 mx-auto mb-4" />
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton 
              key={i} 
              className="w-24 h-24 md:w-32 md:h-32 rounded-xl" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSkeleton;
