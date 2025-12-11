import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="text-white pt-36 pb-[70px]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-24">
        <h2
          className="text-center text-[36px] md:text-[38px] font-normal tracking-wider leading-[1.0]"
          style={{ color: '#e8d2ff' }}
        >
          CONTACT US
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mt-[140px] mb-16">
          <div className="text-[17px] md:text-[18px] space-y-6 tracking-wide" style={{ color: '#b4b4cc' }}>
            <p>
              At SplitVest, we’re building the future of real estate investing—secure, transparent, and accessible through 
              fractional ownership. Whether you're a first-time investor, a seasoned portfolio builder, or simply curious 
              about how real estate tokenization works, we’re here to help.
            </p>
            <p>
              Have questions about property investments or how everything works?
              We’re here to help with listings, your dashboard, or partnership opportunities.
            </p>
          </div>

          <div className="space-y-8 tracking-wide">
            <div>
              <p className="uppercase text-[16px] md:text-[17px]" style={{ color: '#a4a4a4' }}>Phone</p>
              <p className="mt-1 text-[18px] md:text-[20px] font-light" style={{ color: '#ffffff' }}>+91 96000 52850</p>
            </div>
            <div>
              <p className="uppercase md:text-[17px]" style={{ color: '#a4a4a4' }}>Email</p>
              <p className="mt-1 text-[18px] md:text-[20px] font-light" style={{ color: '#ffffff' }}>skorpiondigisolutions@gmail.com</p>
            </div>
          </div>

          <div className="space-y-1 md:space-y-2 tracking-wide">
            <p className="uppercase text-[16px] md:text-[17px]" style={{ color: '#a4a4a4' }}>Office</p>
            <p className="text-[17px] md:text-[19px] font-light leading-tight" style={{ color: '#ffffff' }}>
              Devapragasam Trade Centre, <br />
              Wing C, 3rd Floor, <br /> Venkateshwara nagar,<br />
              Maduravayol , Chennai,<br />
              Tamil Nadu - 600095
            </p>
          </div>
        </div>

        <form className="space-y-6 md:mt-[74px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name *"
              className="bg-transparent border-2 px-6 md:px-8 py-6 text-[16px] rounded outline-none placeholder-gray-500"
              style={{ borderColor: '#4d345c', color: '#fff' }}
              required
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="bg-transparent border-2 px-6 md:px-8 text-[16px] py-6 rounded outline-none placeholder-gray-500"
              style={{ borderColor: '#4d345c', color: '#fff' }}
              required
            />
            <input
              type="text"
              placeholder="Your Phone (optional)"
              className="bg-transparent border-2 px-6 md:px-8 py-6 text-[16px] rounded outline-none placeholder-gray-500"
              style={{ borderColor: '#4d345c', color: '#fff' }}
            />
            <input
              type="text"
              placeholder="Topic (optional)"
              className="bg-transparent border-2 px-6 md:px-8 py-6 text-[16px] rounded outline-none placeholder-gray-500"
              style={{ borderColor: '#4d345c', color: '#fff' }}
            />
          </div>

          <textarea
            placeholder="Your Message *"
            rows={5}
            className="w-full bg-transparent border-2 px-6 md:px-8 pt-6 pb-10 text-[16px] rounded outline-none placeholder-gray-500"
            style={{ borderColor: '#4d345c', color: '#fff' }}
            required
          />
        </form>

        <div className="flex items-start mt-4 gap-4">
           <input
              type="checkbox" id="consent" className="peer hidden"
            />
            
            <label
              htmlFor="consent"
              className="bg-transparent mt-[3px] md:mt-[2px] xl:mt-[3px] text-xl  w-6 md:w-5 aspect-square border border-[#4d345c] 
                        flex items-center justify-center  cursor-pointer peer-checked:after:content-['✔'] 
                        peer-checked:after:text-[white] peer-checked:after:text-sm peer-checked:after:font-semibold"
            ></label>
            <label htmlFor="consent" className="text-[16px] md:text-[17px] xl:text-[18px] tracking-wide" style={{ color: '#b4b4cc' }}>
              I'm okay with getting emails and having that activity tracked to improve my experience.
            </label>
          </div>

          <button
            type="submit"
            className="mt-9 px-20 md:px-24 py-6 text-[14px] md:text-[15px] xl:text-[16px] rounded-[8px] transition-all tracking-wide"
            style={{
              border: '3px solid blue',
              color: '#ffffff',
            }}
            onMouseOver={e => e.currentTarget.style.background = '#6b21a8'}
            onMouseOut={e => e.currentTarget.style.background = 'transparent'}
          >
            SEND MESSAGE
          </button>
      </div>
    </section>
  );
};

export default ContactSection;
