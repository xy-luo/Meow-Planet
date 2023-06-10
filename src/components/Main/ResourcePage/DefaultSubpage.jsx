import Tab from "../../Tab";
import List from "../../List";

function DefaultSubpage() {
    // get content for tab
    const prosAndCons = {
        buyFromBreeder: {
            pros: ["They could be overly depedent and needy.", "You can be sure of your new pet’s pedigree, so you can show it if you want to.", "You can be reasonably sure of temperament and health characteristics based on breed tendencies."],
            cons: ["Greater expense. It’s very expensive to buy a pedigree breed.", "Long wait times.", "Reputable breeders aren’t easy to find.", "Using breed to gauge temperament is not always reliable – each dog, cat, rabbit is an individual.", "Some health problems are genetic and more common in some breeds than others."]
        }, 
        adopt: {
            pros: ["You'll save more than one life by adopting a cat.", "It makes good financial sense to adopt a cat.", "The personality of an adopted cat is known.", "There’s a wide variety of cats to adopt", "They can be low-maintenance. They don't require that much space.", "They can be affectionate.", "You don't have to walk them.", "They are entertaining."],
            cons: ["They Shed a Lot.", "Many people are allergic to them.", "They damage furniture. They may scratch or bite.", "They Are Natural-Born Killers. They may kill small animals.", "Their Veterinary Bills Can Be Very Expensive.", "They vomit occasionally.", "They Are Strong-Willed and Rarely Obey Commands.", "They can be very vocal.", "They can get fleas."],
        },
        getFromFriend: {
            pros: ["It would be really depedent.", "They are healthy and friendly.", "You can ask for help from your friends or neighbours who alreadly have plenty of experience."],
            cons: ["It's hard to have, need luck.", "Limited option."],
        }
    }

    const tabContentList = [
        {
            tabTitle: "Buy from breeder/pet shop",
            tabContent: (
                <div>
                    <p>If you decide you want a pedigree cat then you have to choose not only the breed you want, but also a breeder who can provide a kitten that’s in the best of health and, equally importantly, that will make a good pet.</p>
                    <p>
                        <span className="tag pros-tag">Pros: </span>
                        <List
                            list={prosAndCons.buyFromBreeder.pros}
                            wrapperClassName="pros-list" />
                    </p>
                    <p>
                        <span className="tag cons-tag">Cons: </span>
                        <List
                            list={prosAndCons.buyFromBreeder.cons}
                            wrapperClassName="cons-list" />
                    </p>
                </div>
            ),
        },
        {
            tabTitle: "Adopt from a homing/rescue centre",
            tabContent: (
                <div>
                    <p>Many wonderful cats and kittens come from rehoming/rescue organizations and find excellent homes with caring owners. Find one which is doing a great job and support it however you can.</p>
                    <p>
                        <span className="tag pros-tag">Pros: </span>
                        <List
                            list={prosAndCons.adopt.pros}
                            wrapperClassName="pros-list" />
                    </p>
                    <p>
                        <span className="tag cons-tag">Cons: </span>
                        <List
                            list={prosAndCons.adopt.cons}
                            wrapperClassName="cons-list" />
                    </p>
                </div>
            ),
        },
        {
            tabTitle: "Get one from friends or neighbour",
            tabContent: (
                <div>
                    <p>Get a kitten from neighbors or friends whose own cat has had an ‘accidental’ litter. This can easily happen if owners don’t realize that their own ‘kitten’ was grown up enough to have kittens of its own.</p>
                    <p>
                        <span className="tag pros-tag">Pros: </span>
                        <List
                            list={prosAndCons.getFromFriend.pros}
                            wrapperClassName="pros-list" />
                    </p>
                    <p>
                        <span className="tag cons-tag">Cons: </span>
                        <List
                            list={prosAndCons.getFromFriend.cons}
                            wrapperClassName="cons-list" />
                    </p>
                </div>
            ),
        }
    ]

    // render page
    return (
        <div>
            <p>
                There are a variety of ways to find a pet cat. Here are three most common ways to get your kitten or cat.
            </p>
            <Tab tabContentList={tabContentList} />
        </div>
    );
}


export default DefaultSubpage;