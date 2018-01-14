class Durations {
  
  static durationFilter( value ){
			switch (value) {
			case 1:
				return "1 dia y medio";
			case 2:
				return "2 dia y medio";
			default:return"no labora";
		}
	}
  
}

export default Durations.durationFilter;