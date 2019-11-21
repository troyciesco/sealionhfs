import React from "react"
import { Heading, Text } from "../../bruin"

const Repairs = () => {
	return (
		<div style={{ width: "50%" }}>
			<Heading>Repairs works</Heading>
			<Text mb="sm">
				Repairs is a table of all the possible repairs for a project. It includes what to be done as
				well as how much it will cost. Ideally I'll create a way to automatically generate tasks
				based on what's added to the repairs estimator. For example, re-doing the roof will add all
				of the common tasks associated with a roofing project.
			</Text>
			<Text mb="sm">
				Basically there should be some sort of relationship between estimations, tasks, budget,
				schedule and people.
			</Text>
			<Text mb="sm">
				You estimate the cost and materials for a repair. There are tasks associated with carrying
				that out. These tasks help form a schedule/calendar for the work. Then you'll have expenses
				associated with the repair, in the form of purchasing materials and purchasing labor. This
				will be compared to the estimation/budget.
			</Text>
			<Text mb="sm">
				There should be tasks that are automatically generated when a lead is created.
			</Text>
			<Text mb="sm">
				Flip analysis includes inputting the ARV, then the purchase price (or anticipated purchase
				price), Then calculating repair costs by lump sum or $/sf or detailed estimate, Then fixed
				costs inclu. buying, holding, selling, all of which can be done by lump, some percentage or
				detailed. Next it deals with setting up the loan. Then it asks for desired profit based on
				total or % of resale. It uses all of this data to calculate a recommended MPP (% and total).
			</Text>
			<Text mb="sm">
				So the first question a user asks is "should I pursue this flip?" They put in arv, costs,
				desired profit, and it spits out recommended purchase price. There should also be pre-data
				and post-data to determine how close the flip is (and will be) to comparisons.
			</Text>
		</div>
	)
}

export { Repairs }
