function Label({ title }: { title: string }) {
  return (
    <div className="absolute bottom-0 left-0 z-30 w-full md:px-4 md:pb-4 px-2 pb-3">
      <div className="rounded-lg bg-white-500 md:p-4 p-2 text-sm md:text-base text-center font-bold group-hover:underline underline-offset-4 text-dark-90">
        {title}
      </div>
    </div>
  );
}

export default Label;
