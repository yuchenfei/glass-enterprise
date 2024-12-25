const banners = [
  { index: 1, src: '/banner-1.jpg' },
  { index: 2, src: '/banner-2.jpg' },
  { index: 3, src: '/banner-3.jpg' },
  { index: 4, src: '/banner-4.jpg' },
  { index: 5, src: '/banner-5.jpg' },
]

export default function Banner() {
  return (
    <div>
      <div className="carousel w-full">
        {banners.map((banner) => (
          <div id={`banner-${banner.index}`} className="carousel-item w-full">
            <img src={banner.src} key={banner.index} className="w-full" />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {banners.map((banner) => (
          <a href={`#banner-${banner.index}`} key={banner.index} className="btn btn-xs">
            {banner.index}
          </a>
        ))}
      </div>
    </div>
  )
}
