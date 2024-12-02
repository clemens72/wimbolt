import { Button } from "@/components/ui/button"

export function NavMobile(items) {
  return (
    <>
      {items.map((item) => (
        <Button key={item.title} variant={'nav'} size={'max'}>
          <a href={item.url} className="">
            {item.icon && <item.icon className="" />}
          </a>
        </Button>
      ))}
    </>
  )
}