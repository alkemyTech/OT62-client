import React from 'react'
import { Link, useParams } from 'react-router-dom';
// import Slider from '../../Campaigns/School/Slider';

async function NewsDetail() {
    // const { id } = useParams()
   let new1 = {
           name: "NOVEDAD 1",
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies ullamcorper et bibendum at neque, tellus dolor nibh netus. Varius odio dictum blandit suscipit praesent purus ultrices. Cras suspendisse arcu hendrerit sed faucibus platea. Facilisis molestie quisque ultrices commodo nunc cursus sit nisi. Vivamus sed euismod rutrum placerat ut. Eu in facilisis vestibulum at. Morbi amet mattis sed elementum cursus. Interdum quisque sed viverra integer diam purus, tortor commodo. Duis sed vulputate suspendisse consectetur in mauris. Est volutpat quisque faucibus ut turpis sagittis massa, quam. Tincidunt in rutrum aenean neque, volutpat sit. Dictum diam malesuada condimentum ultrices amet gravida aliquam lobortis. Dolor enim facilisi semper odio at est bibendum porta augue. Lectus morbi tellus odio eu.",
           image: "https://s3-alpha-sig.figma.com/img/fba1/0edf/0495871cb402330cdf2f55b6c91a897c?Expires=1664150400&Signature=gJcvaj1jA2aJE8nYuoDxOGMEgpHMVBW~wwtkaRbULPM-30aPM7pepxOJbfs24yiIBHhE0OyoQ7rgfEyKVmXWh5FwLLaSV7Om4H090I-ew0SzJ02vedFTJGVvq5jd4pCY2Ia5e82e3ppLp4mJrd6r6yvTzmfaOtva-bWlueT9aY21InwW56bnRtYUvFF7sR6wgfQGwxvEQp7XUDAmCubQjFxgmMoyODKa3n~bCptxo7sUehcAiMMGzOFpyzWsGdTFAJRvaIn-ciriaXcgPrqcJD6g84IKCKat9~oGQB07IjRdicoCFSms89s-WaSC0AdDPzKf~C5xvPbYh7swhE1fmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
       }

    return (
        <>
            <div>
                <img src={new1.image} alt="img"/>
                <div className='w-1/2 flex justify-center flex-col m-auto'>
                    <h2 className='my-3 font-bold'>{new1.name}</h2>
                    <p>{new1.description}</p>
                </div>
                <button className='my-3 w-1/2 flex justify-center flex-col m-auto'>
                    <Link to="/contribuir" className="bg-red-500 p-2 rounded-xl text-white">Ir al inicio</Link>
                </button>
            </div>

        </>
    );
}

export default NewsDetail