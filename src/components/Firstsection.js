import Lapis from "../assets/lapis.svg"
import Seta from "../assets/setaCurvada.svg"
import Estrela from "../assets/estrela.svg"
import Coroa from "../assets/coroa.svg"
import Telefone from "../assets/telefone.svg"
import Cruz from "../assets/cruz.svg"
import Image from "next/image"
import KethApontando from "../assets/kethapontando.svg"
export function Firstsection() {
    return (
        <section class="w-full h-[900px] bg-lightBlue">
            <div class="w-full flex flex pt-[32px] pl-[32px]">
                <div class="basis-1/5">
                    <button class="flex flex-row gap-2">
                        <span class="text-2xl font-bold text-white">KethCorrige</span>
                        <Image class="" src={Lapis}/>
                    </button>
                
                </div>
                <div class= "flex flex-row basis-4/5 justify-center pt-[6px] pb-[7px] pr-[20%]">
                    <div class="flex gap-8">
                        <button>
                            <span class="text-lg text-white">Início</span>
                        </button>
                        <button>
                            <span class="text-lg text-white">Sobre</span>
                        </button> 
                        <button>
                            <span class="text-lg text-white">Serviços</span>
                        </button> 
                        <button>
                            <span class="text-lg text-white">Aprovados</span>
                        </button> 
                        <button>
                            <span class="text-lg text-white">Valores</span>
                        </button> 
                        <button>
                            <span class="text-lg text-white">Contato</span>
                        </button>             
                    </div> 
                </div>    
            </div>
            <div class="flex flex-col">
                <div class="flex flex-col mt-24">
                    <span class="text-[72px] font-bold text-center text-white">GARANTA SUA APROVAÇÃO</span>
                    <span class="text-[72px] font-bold text-center mt-[-20px] text-white">mande a sua redação!</span>
                    <div class="flex justify-center mt-[15px]">
                        <span class="text-[18px] font-medium text-center w-[526px] h-[44px] text-white">Se você precisa de ajuda na redação não hesite, entre em contato e comece a evoluir.</span>
                    </div>
            </div>
                <div class= "flex flex-row mt-[30px]">
                    <div class="flex basis-[55.60259%] justify-end ">
                        <button class="w-[180px] h-[57px] bg-gold rounded-full shadow-2xl shadow-gold ">
                            <span class="text-black font-bold">Comprar</span>
                        </button>
                    </div>
                    <div class="flex flex-col basis-[44.39745] justify-start">
                        <div class="flex flex-col ">
                            <div class="rotate-[18deg]">
                                <span class="ml-[30px] font-medium text-white">Peça aqui!</span>
                            </div>
                            <Image class="h-[55px] w-[55px] ml-[20px] rotate-[5deg]"src={Seta}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-center items-center my-6">
                <div class="flex flex-row w-[350px] h-[100px] bg-darkBlue  shadow-lg shadow-lightBlack -rotate-10 p-4 items-center gap-2">
                    <Image class=""src={Estrela}/>
                    <span class="text-white text-lg">Alunos do KethCorrige têm a média de 900+ no ENEM</span>
                    <Image class="rotate-5"src={Cruz}/>
                </div>
                <div class="flex flex-row w-[350px] h-[100px] bg-darkBlue  shadow-lg shadow-lightBlack rotate-5 p-4 items-center gap-2 ">
                    <Image class=""src={Coroa}/> 
                    <span class="text-white text-lg">Mais de 3.200 redações corrigidas </span>
                    <Image class="rotate-5"src={Cruz}/>
                </div>
                <div class="flex flex-row w-[350px] h-[100px] bg-darkBlue  shadow-lg shadow-lightBlack -rotate-7 p-4 items-center gap-2">
                    <Image class="rotate-5"src={Telefone}/>
                    <span class="text-white text-lg">Mais de 3.200 redações corrigidas </span>
                    <Image class="rotate-5"src={Cruz}/>
                </div>
            </div>
            <Image class="absolute bottom-0 left-0"src={KethApontando}/>
        </section>
    )
}