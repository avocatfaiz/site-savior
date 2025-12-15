import { Skeleton } from "@/components/ui/skeleton";

const ServiceCardSkeleton = () => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card text-center">
      <Skeleton className="w-16 h-16 rounded-xl mx-auto mb-4" />
      <Skeleton className="h-6 w-32 mx-auto mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mx-auto" />
    </div>
  );
};

const ServicesSkeleton = () => {
  return (
    <div className="py-12 md:py-16 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-10">
          <Skeleton className="h-8 w-48 mx-auto mb-4" />
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <ServiceCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSkeleton;
