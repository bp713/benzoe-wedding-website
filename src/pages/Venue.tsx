import { useState } from "react";

export default function Venue() {
  const [showVideo, setShowVideo] = useState(false);
  const [show3DTour, setShow3DTour] = useState(false);
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-6">Venue</h2>

      <div className="mb-6">
        <button
          onClick={() => setShowVideo(!showVideo)}
          className="w-full text-left p-4 bg-[#85BDCC]/10 rounded-lg hover:bg-[#85BDCC]/20 transition-colors"
        >
          <span className="text-lg font-medium">
            Video {showVideo ? "▼" : "▶"}
          </span>
        </button>
        {showVideo && (
          <div className="aspect-video mt-4">
            <iframe
              src="https://www.youtube.com/embed/P3lEN0krBJE?si=uRfL30mWpRHDY6q3"
              title="Rise Hall Video"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      <div className="mb-6">
        <button
          onClick={() => setShow3DTour(!show3DTour)}
          className="w-full text-left p-4 bg-[#85BDCC]/10 rounded-lg hover:bg-[#85BDCC]/20 transition-colors"
        >
          <span className="text-lg font-medium">
            3D Virtual Tour {show3DTour ? "▼" : "▶"}
          </span>
        </button>
        {show3DTour && (
          <div className="aspect-video mt-4">
            <iframe
              src="https://my.matterport.com/show/?m=zWAFFxeUKKR"
              title="Rise Hall 3D Tour"
              className="w-full h-full rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      <div className="mb-6">
        <button
          onClick={() => setShowMap(!showMap)}
          className="w-full text-left p-4 bg-[#85BDCC]/10 rounded-lg hover:bg-[#85BDCC]/20 transition-colors"
        >
          <span className="text-lg font-medium">
            Location {showMap ? "▼" : "▶"}
          </span>
        </button>
        {showMap && (
          <div className="aspect-video mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.9764688546184!2d-0.2504435232367145!3d53.861066372443084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878bb047a82882b%3A0xb42068a91a14583e!2sRise%20Hall%20Weddings%20and%20Events%20venue!5e0!3m2!1sen!2suk!4v1753539320769!5m2!1sen!2suk"
              title="Rise Hall Location"
              className="w-full h-full rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
