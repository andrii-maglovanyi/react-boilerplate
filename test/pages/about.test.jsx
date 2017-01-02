import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'

import About from 'about'

describe('About', () => {
  it('should exist', () => {
    expect(About).to.exist
  })

  it('should render about text', () => {
    const about = shallow(<About/>)
    expect(about.find('h1').text()).to.equal('About page')
  })
})
