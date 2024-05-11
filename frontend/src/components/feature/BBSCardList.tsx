import BBSCard from "@/components/feature/BBSCard"
import type { BBSData } from "@/types/types"

type Props = {
  bbsAllData: BBSData[]
}

const BBSCardList = ({ bbsAllData }: Props) => {
  return (
    <div className="grid gap-4 p-4 lg:grid-cols-3">
      {bbsAllData.map((bbsData) => (
        <BBSCard key={bbsData.id} bbsData={bbsData} />
      ))}
    </div>
  )
}

export default BBSCardList
