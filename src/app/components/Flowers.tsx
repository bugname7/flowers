import Image from "next/image"
const Flowers = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-0">

        <div className="relative w-[330px] h-[200px]">
          <Image
            src="/images/white-arx.jpg"
            alt="White arxideya"
            width={310}
            height={200}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative w-[330px] h-[200px]">
            <Image
              src="/images/lola.jpg"
              alt="lola image"
              fill
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="relative w-[330px] h-[200px]">
            <Image
              src="/images/sakura.jpg"
              alt="sakura image"
              fill
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flowers
