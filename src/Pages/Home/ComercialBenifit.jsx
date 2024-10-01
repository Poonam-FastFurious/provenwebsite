import { Link } from "react-router-dom";

function ComercialBenifit() {
  return (
    <div className=" bg-gradient-to-r from-[#F0D8CE] via-[#F5E4D5] to-[#FAF2EB] ">
      <div className="grid lg:grid-cols-2 items-center gap-10      container mx-auto p-4">
        <div className="max-lg:text-center">
          <h6 className=" text-sm max-sm:text-2xl font-extrabold  text-AFPPrimary">
            Commercial Ro System
          </h6>

          <h2 className="text-gray-800 text-xl max-sm:text-xl font-extrabold mb-4">
            Commercial RO Water Purifying System
          </h2>
          <p className="text-gray-600  text-justify">
            Commercial RO has become a famous name over the time. Everyone has
            become aware of the need to install a water purifying system.
            However, even though people know the importance of the water
            purifier, they don’t seem to welcome the option in their lives. Some
            of them are still stuck to the old age way of water purification.
            They still think that boiling water can kill the germ. However, this
            is a wrong concept. To kill the germs that water carries, you need
            more than fire. Above all, commercial RO Systems are made to purify
            water. These systems come with ultra purification systems which
            kills germs like chlorine and arsenic. These elements cannot be seen
            with naked eyes. This is the reason, people don’t get to understand
            that they are drinking contaminated water. The Water Purifiers which
            you get here are created to make water pure and drinkable. The
            systems are integrated with high quality purification systems which
            purifies water through UV ray. It does not matter how serious or
            dangerous the germ is – the purification system makes it a point to
            kill them all and offer you pure and clean water.
          </p>
          <button
            type="button"
            className=" border px-4 py-2.5 rounded-md tracking-wide flex items-center text-sm mt-6 bg-AFPPrimary text-white max-lg:mx-auto"
          >
            <Link to="Productctegory/Commercial Ro">Shop Now</Link>
           
          </button>
        </div>
        <div className="grid md:grid-cols-2 mx-auto">
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/1804/b0d6/bd973e7ee128125ba65e94bb52b2e6b1?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpkXu-mm6ScrhbIMi3lcD01jEkowmg3ZqfwxvDJeXHdSVr6GzHjXFux7aWW34uet1WVL7L0v57FdWEcbg~VL7arxisR8yAdHtWakp6f~na0VoV~XOJYa05kmADInpp5-b-ymtZ3EqvjUeI7rjds~~CSI2CN3ZFhd~UHoGMBGGrCCZ4r7AprJdu1tzaUOTpkzPDqSdbLNKd6fJQ0Hbiex-og0bkFAsLts31T~VvRoQfUppBNxN8~dXHwrRjSYyrL-ZqnJWZ8ecc~vCYhcncjcjT70ky1GwrBdP0J8R1BOrEniK8L0~6I0W4qZ9teb3U0rzX5~vxOPz~DzOSnLmlDvSw__"
              alt=""
            />
          </div>

          <div></div>

          <div></div>

          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/fc37/895d/a3be3736a657c283e8cbdbcf8f26558a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMSJA5ueP8~tzCYC-GhZ9v3ohx44htsD5IpLLou5ED1xvZFkUt~UBMeO~c2-QRhkWtCSMrGuNJmaW6BTBqwO75rck81tduJ2T3-sbQrNC6zrQRZX7Y2kThnXSgZ9LFDbLdZu2m1q3w8MAgmC9U699KiKyP1Mwc7lGXXEWLImfC9GI8uHqqcfJaTW~hfzko9SujgKbyzU8JpbJVmTU0mwV38kaUQUrzSlpLnXNeufMgGu9QKZcFbj6ZUmVO5Q7cfeGxsNu~F5xKf0d7CV8GTv-uxHX8aLyaM2ukjhdtBuylf94xxYa1ix~-Fd0GYE4WNHDjg6mrAbmJHiTns6i4EF4w__"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComercialBenifit;
