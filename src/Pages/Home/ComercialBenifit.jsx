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
              src="https://s3-alpha-sig.figma.com/img/1804/b0d6/bd973e7ee128125ba65e94bb52b2e6b1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=koh9DblQA-f0l8GPPDzW0tz9uAs-6y-0T0RttkmttxgPGd~M5rWVLFFC0DzTolkvZ529kzyXxjRqkBDts38W2wt2yQRMMchT1GV8S98Kp1JLf-q64PGsHC9M14q17uzascTGJJ2dHm-69Nw7qRRyZ9sbZHmxT9ATDDC5G-PdoWnoAyAHMUeL4JZsTLce~V6Okr86joZ-XbDvuFqNLfTGCJl4Yvw-BUS-rkJj8D2koHJFsATtgzlM~rczT1Zcdlwkvc6WH8DD517Fu7BAVDIVMgixd4hwtAo1hZiKRfcfEW77Pq3ZpjMWcQVinV-kz8NBVFR6fru4cuoGvpzwdtqRqA__"
              alt=""
            />
          </div>

          <div></div>

          <div></div>

          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/fc37/895d/a3be3736a657c283e8cbdbcf8f26558a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NndGLN8eJAKu2liGkSM3S58IeaW~0apwqZiko8pxeViefzS9PhZdfu71iRsx-XmvPZYzQwzZyF4znupoigb21UH8D6mmK9B9DBt3y5jUca3EwRrfmoObztXJiOBqwk2xAQL9741ipJfUPoo12wQLaUiSrN6EuL46Xu6N2HrLR6aTO10YrIMu4mDB6Cm5lNcHln-VF5zdk5nePz86rLW7D4zkqe51yxTNHuZPn1CxGeOC06u2-JmrEFrCgpDkZCGfpNRHPTJUFah1TCCTBZXZkAw8Jj2bPLN7TwC2Vru7bJTiWSj0RbSgSJrik4GLJowxl5MKAQnqd~eW0gXrK3Mi-g__"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComercialBenifit;
