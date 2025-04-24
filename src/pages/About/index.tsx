import useTitle from '../../lib/useTitle';

function About() {
	useTitle('about');
	return (
		<>
			<div>
				<h1>about</h1>
				<hr />
				<p>
					lorem ipsum dolor sit amet, consectetur adipiscing elit. cras hendrerit, nisl at lobortis tempor, velit sapien
					tincidunt odio, nec pretium lorem justo ut mauris. nunc vitae diam non nulla aliquet lacinia vitae vel turpis.
					vestibulum vehicula vulputate bibendum. praesent tempor tincidunt arcu, sed viverra urna sodales et. etiam
					sapien lectus, ultricies nec elit eget, dictum tincidunt elit. proin condimentum ex eget erat ornare, sit amet
					vulputate ligula vehicula. ut ac nisl suscipit, egestas lorem euismod, rhoncus lorem. fusce lobortis luctus
					risus, eu sollicitudin libero ultrices non. nulla luctus sapien vel laoreet mattis. cras justo nisi, mollis
					laoreet risus et, dictum venenatis augue. nulla eros lectus, congue egestas est non, suscipit tristique arcu.
					quisque lacus leo, imperdiet sit amet magna id, maximus tempor erat. pellentesque scelerisque suscipit nisl
					vel pulvinar.
				</p>
				<p>
					etiam sagittis diam nibh, et suscipit tortor congue eget. fusce turpis odio, accumsan accumsan pulvinar non,
					lobortis blandit arcu. donec et fringilla eros. donec interdum congue nisi, eu tempus ipsum faucibus ac. sed
					at tellus aliquam, porta nunc non, lobortis lorem. integer vestibulum mi magna. class aptent taciti sociosqu
					ad litora torquent per conubia nostra, per inceptos himenaeos. curabitur urna sem, fermentum ut condimentum a,
					congue in mauris.
				</p>
			</div>
		</>
	);
}

export default About;
