var Rental = function () { };

Rental.prototype.statement = function (customer) {

  var movies = {
    F001: { title: 'Ran', code: 'regular' },
    F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
    F003: { title: 'Cars 2', code: 'childrens' },
    F004: { title: 'Latest Hit Release', code: 'new' },
  };

  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;
  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
    let thisAmount = 0;

    // determine amount for each movie
    switch (movie.code) {
      case 'regular':
        thisAmount = 2;
        if (r.days > 2) {
          thisAmount += (r.days - 2) * 1.5;
        }
        break;
      case 'new':
        thisAmount = r.days * 3;
        break;
      case 'childrens':
        thisAmount = 1.5;
        if (r.days > 3) {
          thisAmount += (r.days - 3) * 1.5;
        }
        break;
    }

    //add frequent renter points
    frequentRenterPoints++;
    // add bonus for a two day new release rental
    if (movie.code === 'new' && r.days > 2) frequentRenterPoints++;

    //print figures for this rental
    result += `\t${movie.title}\t${thisAmount}\n`;
    totalAmount += thisAmount;
  }
  // add footer lines
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
};


Rental.statement({
    name: 'martin',
    rentals: [{ movieID: 'F001', days: 3 }, { movieID: 'F002', days: 1 }]
});
// "Rental Record for martin\n\tRan\t3.5\n\tTrois Couleurs: Bleu\t2\nAmount owed is 5.5\nYou earned 2 frequent renter points\n"

// REFACTORED________________________________________________________
class Rental {
    movies = {
        F001: { title: 'Ran', code: 'regular' },
        F002: { title: 'Trois Couleurs: Bleu', code: 'regular' },
        F003: { title: 'Cars 2', code: 'childrens' },
        F004: { title: 'Latest Hit Release', code: 'new' },
    }

    getAmount(movieCode, days) {
        // determine amount for each movie
        let rental = 0;
        switch (movieCode) {
            case 'regular':
                rental = 2;
                if (days > 2) {
                    rental += (days - 2) * 1.5;
                }
                break;

            case 'new':
                rental = days * 3;
                break;

            case 'childrens':
                rental = 1.5;
                if (days > 3) {
                    rental += (days - 3) * 1.5;
                }
                break;
        }
        return rental;
    }

    getPoints(movieCode, days) {
        let points = 1;
        // add bonus for a two day new release rental
        if (movieCode === 'new' && days > 2) {
            points++;
        }
        return points;
    }

    statement(customer) {
        const { name, rentals } = customer;
        let totalAmount = 0;
        let frequentRenterPoints = 0;

        const result = [
            `Rental Record for ${name}`
        ];

        rentals.forEach(rental => {
            const { days, movieID } = rental;
            const movie = this.movies[movieID];
            const { code, title } = movie;

            const amount = this.getAmount(code, days);
            // print figures for this rental
            result.push(`\t${ title }\t${ amount }`);
            totalAmount += amount;
            frequentRenterPoints += this.getPoints(code, days);
        });

        // add footer lines
        result.push(`Amount owed is ${ totalAmount }`);
        result.push(`You earned ${ frequentRenterPoints } frequent renter points`);

        return result.join('\n');
    }
}

const rental = new Rental();
rental.statement({
    name: 'martin',
    rentals: [{ movieID: 'F001', days: 3 }, { movieID: 'F002', days: 1 }]
});
// "Rental Record for martin\n\tRan\t3.5\n\tTrois Couleurs: Bleu\t2\nAmount owed is 5.5\nYou earned 2 frequent renter points"


