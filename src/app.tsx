import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
// import { EmpytGoals } from './components/empty-goals'

export function App() {
  return (
    <Dialog>
      <Summary />
      {/* <EmpytGoals /> */}
      <CreateGoal />
    </Dialog>
  )
}
