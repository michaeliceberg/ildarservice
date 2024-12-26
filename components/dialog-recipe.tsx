import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

type Props = {
    recipe: string
    contrag: string
    done: string
}

export function RecipeDialog({
    recipe,
    contrag,
    done
}: Props) {

    const [comp1, setComp1] = useState("10000")
    const [comp2, setComp2] = useState("20000")


  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
            {recipe}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <p className="pb-2 flex justify-center content-center">{contrag}</p>
            <p className="pb-2 flex justify-center content-center text-white bg-gray-700 pt-2 rounded-xl">{recipe.toUpperCase()}</p>
            <p className="mt-2 pb-2 flex justify-center content-center">{done}</p>
          </DialogTitle>
          <DialogDescription>
            Изменить рецепт:
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Песок
            </Label>
            <Input 
                id={comp1}
                value={comp1}
                className="col-span-3" 
                onChange={(e)=>{setComp1(e.target.value)}}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Габбро
            </Label>
            <Input 
                id={comp2}
                value={comp2}
                className="col-span-3" 
                onChange={(e)=>{setComp2(e.target.value)}}
            />
          </div>

        </div>

        <DialogFooter >
          <Button className="w-full" type="submit">Сохранить изменения</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
