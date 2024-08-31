import Label from "./Label";

function CategoryCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="relative col-span-1 mb-8 aspect-square md:aspect-[9/11] overflow-hidden bg-gray-200 hover:border-tertiary-600 border transition-colors duration-100 cursor-pointer group">
      <div className="relative h-full w-full">
        <img className="h-full w-full object-cover" src={image} alt={title} />
      </div>
      <Label title={title} />
    </div>
  );
}

export default CategoryCard;
