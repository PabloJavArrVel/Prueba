
function Showcase(){
    return (
        <>
            <div className="container mt-[40px] w–[100%]">
                <p className="text-[25px] mb-[20px]" >Tendencias</p>
                <div className="grid grid-cols-2 gap-4 text-white tendencias">
                    <div className="relative">
                        <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_666,c_limit/1c3bb518-d5fa-433a-a0f2-cc5fb86f4296/sitio-web-oficial-de-nike.jpg" alt="Nike publicidad" />
                        <div className="absolute bottom-5 left-5 w-full h-full flex flex-col justify-end items-start m-[15px]">
                            <p className="mb-[5px]">Nike sportwear</p>
                            <h2>Rompe las reglas, define tu propio estilo</h2>
                            <div className="flex flex-row">
                                <button>Comprar</button>
                            </div>
                        </div>
                    </div>
                <div className="relative">
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_666,c_limit/12e3ac56-3b4d-411b-a4f8-acac5381c227/sitio-web-oficial-de-nike.jpg" alt="Nike publicidad" />
                    <div className="absolute bottom-5 left-5 w-full h-full flex flex-col justify-end items-start m-[15px]">
                        <p className="mb-[5px]">Presentamos el Phantom Luna</p>
                        <h2>Como nunca antes, para siempre.</h2>
                        <div className="flex flex-row gap-6">
                            <button>Comprar</button>
                            <button className="flex items-center">
                                <p>Mirar</p>
                                <img src="https://icon-library.com/images/play-button-icon-vector/play-button-icon-vector-4.jpg" alt="Play Button"/>
                            </button>

                        </div>
                    </div>
                </div>
                </div>
            </div>
    </>
);
}

export default Showcase;