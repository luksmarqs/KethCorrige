import Lapis from "../assets/lapis.svg"
import Seta from "../assets/setaCurvada.svg"
import Image from "next/image"
export function Firstsection() {
    return (
        <section class="w-full h-[900px] bg-lightBlue">
            <div class="w-full flex flex pt-[32px] pl-[32px]">
                <div class="basis-1/5">
                    <button class="flex flex-row">
                        <span class="text-2xl font-bold">KethCorrige</span>
                        <Image class="size-6 mt-[2px] mb-[3px] ml-[7px]" src={Lapis}/>
                    </button>
                
                </div>
                <div class= "flex flex-row basis-4/5 justify-center pt-[6px] pb-[7px] pr-[20%]">
                    <div class="flex gap-8">
                        <button>
                            <span class="text-lg">Início</span>
                        </button>
                        <button>
                            <span class="text-lg">Sobre</span>
                        </button> 
                        <button>
                            <span class="text-lg">Serviços</span>
                        </button> 
                        <button>
                            <span class="text-lg">Alunos&Aprovações</span>
                        </button> 
                        <button>
                            <span class="text-lg">Valores</span>
                        </button> 
                        <button>
                            <span class="text-lg">Contato</span>
                        </button>             
                    </div> 
                </div>    
            </div>
            <div class="flex flex-col">
                <div class="flex flex-col mt-24">
                    <span class="text-[72px] font-bold text-center">GARANTA SUA APROVAÇÃO</span>
                    <span class="text-[72px] font-bold text-center mt-[-20px]">mande a sua redação!</span>
                    <div class="flex justify-center mt-[15px]">
                        <span class="text-[18px] font-medium text-center w-[526px] h-[44px]">Se você precisa de ajuda na redação não hesite, entre em contato e comece a evoluir.</span>
                    </div>
            </div>
                <div class= "flex flex-row mt-[30px]">
                    <div class="flex basis-[55.60259%] justify-end ">
                        <button class="w-[180px] h-[57px] bg-gold rounded-full shadow-2xl shadow-gold ">
                            <span>Comprar</span>
                        </button>
                    </div>
                    <div class="flex flex-col basis-[44.39745] justify-start">
                        <div class="flex flex-col ">
                            <div class="rotate-[18deg]">
                                <span class="ml-[30px] font-medium">Peça aqui!</span>
                            </div>
                            <Image class="h-[55px] w-[55px] ml-[20px] rotate-[5deg]"src={Seta}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}