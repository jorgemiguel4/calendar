/**
 * @copyright Copyright (c) 2019 Georg Ehrke
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import getIllustrationForTitle from "../../../../src/utils/illustration.js";

describe('utils/illustration test suite', () => {

	it('should return a matching illustration', () => {
		expect(getIllustrationForTitle('Watch movie with Jane')).toEqual('imagePath###calendar###illustrations/movie_night')
		expect(getIllustrationForTitle('Take time to relax')).toEqual('imagePath###calendar###illustrations/relaxation')
		expect(getIllustrationForTitle('Give presentation about calendar')).toEqual('imagePath###calendar###illustrations/presentation')

		expect(getIllustrationForTitle('ABC', ['Watch',  'movie'])).toEqual('imagePath###calendar###illustrations/movie_night')
	})
})