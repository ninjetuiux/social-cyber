'ues server'
import Image from "next/image";
import Link from "next/link";


export const getCategories = async () => {
  try {
    const data = await prisma.category.findMany();
    return data;
  } catch (err) {
    console.error('Failed to fetch data:', err);
    return null;
  }
};



const PopularCategories = async () => {
  const categories = await getCategories();
  // console.log(categories)

  return (
    <div className="flex flex-col text-center items-center w-[100dvw] justify-center">
      <div className="w-full max-w-[1536px] text-center flex justify-center">
        <h1 className="text-3xl font-sans">קטגוריות פופולריות</h1>
      </div>
      <div className="flex w-full max-w-[1536px] m-3 gap-5 justify-center">
        {categories && categories.map((category) => (
          <div 
            key={category.id} 
            className='flex items-center bg-yellow-400 rounded-lg p-3 min-w-[180px] cursor-pointer'
          >
            <div className='rounded-full justify-center w-full'>
              <Link href={`Blog/category/${category.slug}`} className="flex flex-row-reverse gap-2">
                <Image
                  src={`${category.img}` || '/Blog/CategoryImages/PhishingScams.png'}
                  alt={'just title'}
                  width={30}
                  height={30}
                  className='rounded-full w-[30px] h-[30px]'
                />
                <h2 dir='rtl' 
                className='
                text-sm
                font-sans
                whitespace-nowrap
                overflow-hidden
                w-full flex items-center justify-start'>{category.title}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
