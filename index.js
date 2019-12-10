'use strict';

const got = require('got');
const unicode = require('unicodechar-string');

const baseLink = username => {
	return `https://instagram.com/${username}`;
};

const points = {
	id: '"id":"',
	fullname: 'full_name":"',
	username: ',"username":"',
	bio: '"biography":"',
	externalUrl: '"external_url":"',
	linkshimmed: '"external_url_linkshimmed":"',
	posts: ',"edge_owner_to_timeline_media":{"count":',
	followers: ',"edge_followed_by":{"count":',
	following: ',"edge_follow":{"count":',
	private: ',"is_private":',
	verified: ',"is_verified":',
	connected: ',"connected_fb_page":'
};

const splitData = (data, index) => {
	if (index === points.id || index === points.fullname || index === points.username || index === points.bio || index === points.externalUrl || index === points.linkshimmed) {
		return data.split(index)[1].split('","')[0];
	}

	if (index === points.followers || index === points.following) {
		return data.split(index)[1].split('},"')[0];
	}

	return data.split(index)[1].split(',"')[0];
};

module.exports = {

	getAll: username => {
		return got(baseLink(username)).then(res => {
			const data = res.body;
			let allData = {};

			const userId = splitData(data, points.id);
			const fullname = splitData(data, points.fullname);
			const username = splitData(data, points.username);
			const bio = splitData(data, points.bio);
			const externalUrl = splitData(data, points.externalUrl);
			const linkshimmed = splitData(data, points.linkshimmed);
			const posts = splitData(data, points.posts);
			const followers = splitData(data, points.followers);
			const following = splitData(data, points.following);
			const privates = splitData(data, points.private);
			const verified = splitData(data, points.verified);
			const connected = splitData(data, points.connected);

			allData = {id: userId, fullname:fullname, username:username, bio:bio, externalUrl:externalUrl,
				linkshimmed:linkshimmed, posts:posts, followers:followers, following:following,
				private: privates, verified:verified, connected:connected};

			return {data: allData};
		}).catch(error => {
			if (error && error.message === 'Not able to fetch desired result') {
				return {data: false};
			}

			return {data: error.message};
		});
	},

	specificField: (username, info) => {
		return got(baseLink(username)).then(res => {
			const data = res.body;

			const skip = points[info];

			const user = splitData(data, skip);

			return {data: unicode(user)};
		}).catch(error => {
			if (error && error.message === 'Cannot read property \'split\' of undefined') {
				return {data: false};
			}

			return {data: error.message};
		});
	},

	getId: username => {
		return got(baseLink(username)).then(res => {
			const data = res.body;

			const skip = points.id;

			const user = splitData(data, skip);

			return {data: unicode(user)};
		}).catch(error => {
			if (error && error.message === 'Cannot read property \'split\' of undefined') {
				return {data: false};
			}

			return {data: error.message};
		});
	},

	getFullname: username => {
		return got(baseLink(username)).then(res => {
			const data = res.body;

			const skip = points.fullname;

			const user = splitData(data, skip);

			return {data: unicode(user)};
		}).catch(error => {
			if (error && error.message === 'Cannot read property \'split\' of undefined') {
				return {data: false};
			}

			return {data: error.message};
		});
	},

	getBio: username => {
		return got(baseLink(username)).then(res => {
			const data = res.body;

			const skip = points.bio;

			const user = splitData(data, skip);

			return {data: unicode(user)};
		}).catch(error => {
			if (error && error.message === 'Cannot read property \'split\' of undefined') {
				return {data: false};
			}

			return {data: error.message};
		});
	},

	getExternalUrl: username => {
		return got(baseLink(username)).then(res => {
			const data = res.body;

			const skip = points.externalUrl;

			const user = splitData(data, skip);

			return {data: unicode(user)};
		}).catch(error => {
			if (error && error.message === 'Cannot read property \'split\' of undefined') {
				return {data: false};
			}

			return {data: error.message};
		});
	},

	getLinkShimmed: username => {
		return got(baseLink(username)).then(res => {
			const data = res.body;

			const skip = points.linkshimmed;

			const user = splitData(data, skip);

			return {data: unicode(user)};
		}).catch(error => {
			if (error && error.message === 'Cannot read property \'split\' of undefined') {
				return {data: false};
			}

			return {data: error.message};
		});
	},

	getPosts: username => {
		return got(baseLink(username)).then(res => {
			const data = res.body;

			const skip = points.posts;

			const user = splitData(data, skip);

			return {data: unicode(user)};
		}).catch(error => {
			if (error && error.message === 'Cannot read property \'split\' of undefined') {
				return {data: false};
			}

			return {data: error.message};
		});
	},

	getFollowers: username => {
		return got(baseLink(username)).then(res => {
			const data = res.body;

			const skip = points.followers;

			const user = splitData(data, skip);

			return {data: unicode(user)};
		}).catch(error => {
			if (error && error.message === 'Cannot read property \'split\' of undefined') {
				return {data: false};
			}

			return {data: error.message};
		});
	},

	getFollowing: username => {
		return got(baseLink(username)).then(res => {
			const data = res.body;

			const skip = points.following;

			const user = splitData(data, skip);

			return {data: unicode(user)};
		}).catch(error => {
			if (error && error.message === 'Cannot read property \'split\' of undefined') {
				return {data: false};
			}

			return {data: error.message};
		});
	},

	getPrivate: username => {
		return got(baseLink(username)).then(res => {
			const data = res.body;

			const skip = points.private;

			const user = splitData(data, skip);

			return {data: unicode(user)};
		}).catch(error => {
			if (error && error.message === 'Cannot read property \'split\' of undefined') {
				return {data: false};
			}

			return {data: error.message};
		});
	},

	getVerified: username => {
		return got(baseLink(username)).then(res => {
			const data = res.body;

			const skip = points.verified;

			const user = splitData(data, skip);

			return {data: unicode(user)};
		}).catch(error => {
			if (error && error.message === 'Cannot read property \'split\' of undefined') {
				return {data: false};
			}

			return {data: error.message};
		});
	},

	getConnected: username => {
		return got(baseLink(username)).then(res => {
			const data = res.body;

			const skip = points.connected;

			const user = splitData(data, skip);

			return {data: unicode(user)};
		}).catch(error => {
			if (error && error.message === 'Cannot read property \'split\' of undefined') {
				return {data: false};
			}

			return {data: error.message};
		});
	}

};
