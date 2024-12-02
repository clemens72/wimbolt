interface DashboardHeaderProps {
    heading: string
    text?: string
    children?: React.ReactNode
  }
  
  export function DashboardHeader({
    heading,
    text,
    children,
  }: DashboardHeaderProps) {
    return (
      <div className="content-center justify-between m-4">
        {children}
      </div>
    )
  }