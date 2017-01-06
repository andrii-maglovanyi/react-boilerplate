import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'

import Home from 'home'

describe('Home', () => {
  it('should exist', () => {
    expect(Home).to.exist
  })

  it('should render "Home page"', () => {
    const home = shallow(<Home/>)
    expect(home.find('h1').text()).to.equal('Home page')
  })
})
