import React from 'react'

type Props = {
  assets: {
    items: {
      title: string,
      file: string,
    }[]
  },
  title: string,
}

function Video(props: Props) {
  const { assets, title } = props
  return (
    <div className="w-full">
      {assets?.items?.filter(x => x.title === title).length ? (
        assets.items.map((file, z) => {
          if (file.title === title && file.localFile) {
            return (
              <div
                className="xt-media-container bg-gray-200 mt-1 rounded-md border-3 border-gray-100 pb-[59.8%]"
                key={z}>
                <video className="gatsby_site-video xt-media object-cover" preload="none" muted playsInline loop>
                  <source type="video/mp4" src={file.localFile.publicURL} />
                </video>
              </div>
            )
          }
        })
      ) : (
        <div className="xt-media-container bg-gray-200 mt-3 rounded-md border-3 border-gray-100 pb-[59.8%]">
          <img className="xt-media inset-0 m-auto w-20 lg:w-32" src="/logo-white.svg" loading="lazy" alt="" />
        </div>
      )}
    </div>
  )
}

export default Video
