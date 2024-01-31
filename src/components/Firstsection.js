import Lapis from "../assets/lapis.svg"
import Image from "next/image"
export function Firstsection() {
    return (
        <div class="w-full h-[900px] bg-lightBlue">
            <div class="w-full flex flex pt-[32px] pl-[32px]">
                <div class="basis-1/5">
                    <button class="flex flex-row">
                        <span class="text-2xl font-bold">KethCorrige</span>
                        <Image class="size-6 mt-[2px] mb-[3px] ml-[7px]" src={Lapis}/>
                    </button>
                
                </div>
                <div class= "flex flex-row basis-4/5 justify-center pt-[6px] pb-[7px] pr-[25%]">
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
        </div>
    )
}